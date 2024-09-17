"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const ResultPage = () => {
  const router = useRouter();
  const formData = useSelector((state) => state.form.formData);
  return (
    <div className="container mx-auto mt-32">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          نمایش اطلاعات
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          اطلاعات با موفقیت دریافت شد
        </p>
        <a
          onClick={() => router.back()}
          className="inline-block text-white mt-4 bg-blue-700 hover:bg-blue-800 font-bold rounded-lg text-sm px-5 py-2.5 cursor-pointer"
        >
          بازگشت
        </a>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              نام :
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {formData?.firstName}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              نام خانوادگی :
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {formData?.lastName}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default ResultPage;
