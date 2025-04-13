export const App = () => {
  const handleExecButtonClick = async () => {
    const result = await window.nativeApi.getApi1();
    console.log(result);
    const result3 = await window.nativeApi.getApi3({ item1: "a", item2: "b" });
    console.log(result3);
  };
  return (
    <>
      <div>Exaple App</div>
      <div>
        <button onClick={handleExecButtonClick}>実行</button>
      </div>
    </>
  );
};
