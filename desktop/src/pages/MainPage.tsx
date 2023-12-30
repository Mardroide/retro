import { CommandProp } from "../components/CommandProp";

export const MainPage = () => {
  return (
    <>
      <div className="flex flex-col mb-5">
        <h1 className="text-4xl font-bold">Retro Krate</h1>
        <p className="text-green-700">version 0.0.1 - mrcxs</p>
      </div>
      <CommandProp />
    </>
  );
};
