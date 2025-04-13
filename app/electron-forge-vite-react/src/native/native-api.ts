import os from "os";
import { ipcMain } from "electron";

const getApi1 = () => {
  const result = os.hostname();
  return result;
};

const getApi2 = (arg: string) => {
  return arg;
};

const getApi3 = async (arg: { item1: string; item2: string }) => {
  return arg.item1 + ":" + arg.item2;
};

const nativeApi = {
  getApi1,
  getApi2,
  getApi3,
};

export const registApiHandler = () => {
  Object.entries(nativeApi).forEach(([apiName, fn]) => {
    ipcMain.handle(apiName, async (event, arg: unknown) => {
      return await (fn as (...args: unknown[]) => unknown)(arg);
    });
  });
};

export type NativeApi = typeof nativeApi;
