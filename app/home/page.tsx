import Todos from "@/components/todo/Todos";
import { getUsername } from "@/lib/user/user";
import { Suspense } from "react";

const Page = async () => {
  const user = await getUsername();

  return (
    <div className="flex flex-col gap-6 w-full">
      <h1 className="text-2xl text-white text-center">
        Hello {user?.username} From Todo App !
      </h1>
      <Suspense fallback={<p>Yükleniyor...</p>}>
        <Todos />
      </Suspense>
    </div>
  );
};

export default Page;
