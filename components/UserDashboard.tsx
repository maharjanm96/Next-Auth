import Button from "./Button";

export default function UserInfo() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="flex flex-col gap-2 items-center shaodw-lg bg-slate-100 rounded-lg p-4 my-6 ">
        <div>
          Name: <span className="font-bold">Manish Maharjan</span>
        </div>
        <div>
          Email: <span className="font-bold">maharjanm96@gmail.com</span>
        </div>
        <div className="flex justify-center">
          <Button name="Logout" href="" />
        </div>
      </div>
    </div>
  );
}
