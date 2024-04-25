const SmallCardLayout = ({
  title,
  text,
  type,
  Icon,
  rounded,
  bg,
  spacing,
  textColor,
  firstElement,
  textSize,
}) => {
  return (
    <>
      {type === "mobile" ? (
        <div
          className={`${!rounded && "border-b-2"} flex flex-col pb-2 mb-3 ${
            bg && "bg-[#ffedd5]"
          } rounded-${rounded} ${spacing && spacing} `}
        >
          <div className="text-center flex items-center justify-between">
            <p
              className={`${textColor ? "text-[#9a3412]" : "text-primary"} ${
                textSize ? textSize : "text-sm font-medium"
              } mr-2 w-[50%] text-start`}
            >
              {title}
            </p>
            <h3 className="leading-none">
              {Icon && (
                <Icon
                  sx={{
                    color: textColor ? "#9a3412" : "black",
                  }}
                />
              )}
            </h3>
          </div>
          <span
            className={`text-[32px] font-semibold leading-none mt-3 mb-0 ${
              textColor ? "text-[#9a3412]" : "text-primary"
            }  ${firstElement && "border-b-2 border-[#9a3412] pb-2 mb-3"}`}
          >
            {text}
          </span>
        </div>
      ) : (
        <div
          className={`flex flex-col p-4 w-full rounded-lg  bg-white border `}
        >
          <div className="text-center flex items-center justify-between">
            <p
              className={`${textColor ? "text-gray-500" : "text-primary"} ${
                textSize ? textSize : "text-sm font-medium text-gray-500"
              } mr-2 text-start`}
            >
              {text}
            </p>
            <h3 className="leading-none text-yellow-400">
              {Icon && (
                <Icon
                  sx={{
                    color: textColor ? "" : "",
                  }}
                />
              )}
            </h3>
          </div>
          <span
            className={`text-[32px] font-semibold leading-none mt-3 ${
              textColor ? "text-yellow-400" : "text-yellow-400"
            }  ${firstElement}`}
          >
            {title}
          </span>
        </div>
      )}
    </>
  );
};

export default SmallCardLayout;
