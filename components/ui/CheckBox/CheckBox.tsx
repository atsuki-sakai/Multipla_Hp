import React, { useState, ReactNode } from "react";

interface Props {
  label: string;
  onChenged: (state: boolean) => void;
  disabled?: boolean;
  title: string;
  defaultValue: boolean;
  description?: string;
  children?: ReactNode | ReactNode[];
  isShow?: boolean;
}

// onChangedのstateの動きがよく分かっていない
const Checkbox = ({
  label,
  defaultValue,
  onChenged,
  disabled,
  title,
  description,
  children,
  isShow = true,
}: Props) => {
  const [state, changeState] = useState(defaultValue);
  const [showInfo, showInfoState] = useState(false);
  const isChecked = state;
  return (
    <div className="relative">
      {isShow ? (
        disabled ? (
          <div className="bg-green-500 text-white font-bold flex justify-between w-full p-2">
            <input
              onChange={() => onChenged(!state)}
              onClick={() => changeState(!state)}
              className="w-6 h-6"
              type="checkbox"
              defaultChecked
              disabled
            />
            <p className="ml-4 text-sm">{label}</p>
            <button onClick={() => showInfoState(!showInfo)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        ) : isChecked ? (
          <div className="bg-green-500 text-white font-bold flex justify-between w-full p-2">
            <input
              onChange={() => onChenged(!state)}
              onClick={() => changeState(!state)}
              className="w-6 h-6 flex-shrink"
              type="checkbox"
              defaultChecked
            />
            <p className="ml-4 text-sm">{label}</p>
            <button onClick={() => showInfoState(!showInfo)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div className="bg-gray-200 flex justify-between w-full p-2">
            <input
              onChange={() => onChenged(!state)}
              onClick={() => changeState(!state)}
              className="w-6 h-6"
              type="checkbox"
            />
            <p className="ml-4 text-sm">{label}</p>
            <button onClick={() => showInfoState(!showInfo)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )
      ) : (
        ""
      )}
      {showInfo ? (
        <div className="absolute z-20 top-4 -left-2 -right-2 bg-gray-50 shadow-md border rounded-md">
          <div className="p-4">
            <div className="flex justify-between">
              <h3 className="font-bold text-lg">{title}</h3>
              <button onClick={() => showInfoState(!showInfo)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-600 h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <span className="text-sm text-gray-600">
              <div className="p-2">{description}</div>
              <div>{children}</div>
            </span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Checkbox;
