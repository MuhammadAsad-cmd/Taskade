import React from "react";

const ChatSuggestions = () => {
  const suggestions = [
    "What can you do?",
    "Tell me a joke",
    "How's the weather?",
  ];

  return (
    <div className="flex h-full flex-col items-center justify-center overflow-y-auto px-4 py-2">
      <div className="text-md font-bold">X-TWO AI</div>
      <div className="text-textcolor-500 pb-2 text-center text-sm">
        Get started with prompts below or browse all prompts.
      </div>
      <div className="mt-4 flex w-full flex-col justify-center gap-1 p-2">
        <div className="flex">
          <button className="flex w-full items-center justify-center whitespace-normal rounded-xl border border-solid px-4 py-2 text-sm font-medium transition duration-150 ease-in-out hover:bg-gray-50">
            <span>Guide a Research Project</span>
          </button>
        </div>
        <div className="flex">
          <button className="flex w-full items-center justify-center whitespace-normal rounded-xl border border-solid px-4 py-2 text-sm font-medium transition duration-150 ease-in-out hover:bg-gray-50">
            <span>Track competitive market trends</span>
          </button>
        </div>
        <div className="flex">
          <button className="flex w-full items-center justify-center whitespace-normal rounded-xl border border-solid px-4 py-2 text-sm font-medium transition duration-150 ease-in-out hover:bg-gray-50">
            <span>Run Virtual Project Meetings</span>
          </button>
        </div>
        <div className="flex">
          <button className="flex w-full items-center justify-center whitespace-normal rounded-xl border border-solid px-4 py-2 text-sm font-medium transition duration-150 ease-in-out hover:bg-gray-50">
            <span>Twitter Thread Demonstrating Solution to Pain Points</span>
          </button>
        </div>
        <div className="flex">
          <button className="flex w-full items-center justify-center whitespace-normal rounded-xl border border-solid px-4 py-2 text-sm font-medium transition duration-150 ease-in-out hover:bg-gray-50">
            <span>Resolve Product Quality Concerns</span>
          </button>
        </div>
        <div className="flex">
          <button className="flex w-full items-center justify-center whitespace-normal rounded-xl border border-solid px-4 py-2 text-sm font-medium transition duration-150 ease-in-out hover:bg-gray-50">
            <span>Create About Us Page</span>
          </button>
        </div>
      </div>
      <div className="mt-3 flex justify-center">
        <button className="flex items-center rounded-full border border-solid px-4 py-2 text-xs font-bold transition duration-150 ease-out hover:bg-gray-50">
          <svg
            className="mr-2 scale-90"
            fill="currentColor"
            height="20"
            stroke-width="0"
            width="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.63231 1.69001C7.53185 1.50591 8.64071 1.45834 9.97519 1.45834C11.3097 1.45834 12.4185 1.50591 13.3181 1.69001C14.2289 1.87641 14.9796 2.21341 15.5436 2.83125C16.1009 3.4418 16.411 4.2562 16.5887 5.26597C16.7662 6.27394 16.8219 7.53948 16.8219 9.10751C16.8219 9.71268 16.8229 10.2809 16.8238 10.8138C16.8284 13.3344 16.8315 15.0673 16.7179 16.1974C16.6501 16.8718 16.5331 17.4441 16.2761 17.8552C16.1378 18.0763 15.9542 18.2595 15.7157 18.3814C15.4816 18.5012 15.2343 18.5417 14.9977 18.5417C14.457 18.5417 13.9328 18.2443 13.5096 17.9503C13.0966 17.6632 12.6617 17.2916 12.2505 16.9402C12.2179 16.9123 12.1855 16.8846 12.1532 16.8571C11.6991 16.4694 11.2726 16.1116 10.8723 15.8488C10.4572 15.5763 10.1653 15.4717 9.97519 15.4717C9.78505 15.4717 9.49321 15.5763 9.07804 15.8488C8.6778 16.1116 8.2513 16.4694 7.7972 16.8571C7.76492 16.8846 7.73246 16.9123 7.69985 16.9402C7.28864 17.2916 6.85381 17.6632 6.44072 17.9503C6.01757 18.2443 5.49333 18.5417 4.95269 18.5417C4.71604 18.5417 4.46881 18.5012 4.23464 18.3814C3.99621 18.2595 3.81259 18.0763 3.67432 17.8552C3.41722 17.4441 3.3003 16.8718 3.23249 16.1974C3.11884 15.0673 3.12197 13.3344 3.12653 10.8138C3.12749 10.2809 3.12852 9.71267 3.12852 9.10751C3.12852 7.53948 3.18422 6.27394 3.36164 5.26597C3.53938 4.2562 3.84948 3.4418 4.40681 2.83125C4.97079 2.21341 5.72147 1.87641 6.63231 1.69001ZM4.59272 5.48267C4.43522 6.37743 4.37852 7.55179 4.37852 9.10751C4.37852 9.72741 4.37754 10.3048 4.37663 10.8425C4.37235 13.3639 4.36956 15.0117 4.47622 16.0724C4.54195 16.7261 4.64169 17.0446 4.73412 17.1924C4.77063 17.2508 4.79498 17.264 4.80397 17.2686C4.81722 17.2754 4.85683 17.2917 4.95269 17.2917C5.07662 17.2917 5.32218 17.2053 5.72746 16.9237C6.08675 16.6741 6.47541 16.3421 6.90213 15.9776C6.92981 15.954 6.95766 15.9302 6.98567 15.9063C7.43074 15.5264 7.91549 15.1168 8.39202 14.8039C8.85362 14.5008 9.40407 14.2217 9.97519 14.2217C10.5463 14.2217 11.0968 14.5008 11.5584 14.8039C12.0349 15.1168 12.5196 15.5264 12.9647 15.9063C12.9927 15.9302 13.0206 15.954 13.0483 15.9777C13.475 16.3421 13.8636 16.6741 14.2229 16.9237C14.6282 17.2053 14.8737 17.2917 14.9977 17.2917C15.0935 17.2917 15.1332 17.2754 15.1464 17.2686C15.1554 17.264 15.1797 17.2508 15.2162 17.1924C15.3087 17.0446 15.4084 16.7261 15.4742 16.0724C15.5808 15.0117 15.578 13.3639 15.5737 10.8425C15.5728 10.3048 15.5719 9.72741 15.5719 9.10751C15.5719 7.55179 15.5152 6.37743 15.3577 5.48267C15.2005 4.58971 14.9531 4.03853 14.6204 3.67398C14.2942 3.31671 13.8221 3.06908 13.0674 2.91462C12.3014 2.75786 11.302 2.70834 9.97519 2.70834C8.64841 2.70834 7.64894 2.75786 6.88293 2.91462C6.12822 3.06908 5.65614 3.31671 5.33002 3.67398C4.99725 4.03853 4.7499 4.58971 4.59272 5.48267ZM6.49369 7.68143C6.49369 7.33625 6.77351 7.05643 7.11869 7.05643H12.8312C13.1764 7.05643 13.4562 7.33625 13.4562 7.68143C13.4562 8.0266 13.1764 8.30643 12.8312 8.30643H7.11869C6.77351 8.30643 6.49369 8.0266 6.49369 7.68143Z"
              fill-rule="evenodd"
            ></path>
          </svg>
          View More
        </button>
      </div>
    </div>
  );
};

export default ChatSuggestions;
