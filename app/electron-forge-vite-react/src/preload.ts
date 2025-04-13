import { contextBridge, ipcRenderer } from "electron";
import type { NativeApi } from "./native/native-api";
import log from "electron-log/renderer";

const createApiInvoker = (apiNames: string[]) => {
  const invoker: { [apiName: string]: (arg: unknown) => unknown } = {};
  apiNames.forEach((apiName) => {
    invoker[apiName] = async (arg: unknown) => {
      log.info("expose", arg);
      return ipcRenderer.invoke(apiName, arg);
    };
  });
  return invoker;
};

const apiNames = ["getApi1", "getApi2", "getApi3"];
const apiInvoker = createApiInvoker(apiNames);
contextBridge.exposeInMainWorld("nativeApi", apiInvoker);

// Window登録用のAPIインターフェース
type WindowNativeApi = {
  [apiName in keyof NativeApi]: (
    ...args: Parameters<NativeApi[apiName]>
  ) => Promise<Awaited<ReturnType<NativeApi[apiName]>>>;
};

declare global {
  interface Window {
    nativeApi: WindowNativeApi;
  }
}
