import WithLayout from "@/components/layout/WithLayout";

function ImportData() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Upload Data
          </h1>
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
            Securely upload Excel files related to retirees, bank associations,
            and products.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-950 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Retirees</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Upload Excel files containing information about retirees.
            </p>
            <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-md py-8">
              <label
                htmlFor="retiree-file"
                className="cursor-pointer flex flex-col items-center justify-center space-y-2"
              >
                <UploadIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Choose File
                </span>
                <input
                  id="retiree-file"
                  type="file"
                  accept=".xlsx"
                  className="hidden"
                />
              </label>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-950 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Bank Associations</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Upload Excel files containing information about bank associations.
            </p>
            <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-md py-8">
              <label
                htmlFor="bank-file"
                className="cursor-pointer flex flex-col items-center justify-center space-y-2"
              >
                <UploadIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Choose File
                </span>
                <input
                  id="bank-file"
                  type="file"
                  accept=".xlsx"
                  className="hidden"
                />
              </label>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-950 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Products</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Upload Excel files containing information about products.
            </p>
            <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-md py-8">
              <label
                htmlFor="product-file"
                className="cursor-pointer flex flex-col items-center justify-center space-y-2"
              >
                <UploadIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Choose File
                </span>
                <input
                  id="product-file"
                  type="file"
                  accept=".xlsx"
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}

export default WithLayout(ImportData);
