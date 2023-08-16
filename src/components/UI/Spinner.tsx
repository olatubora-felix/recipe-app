import { CSSProperties } from "react";
import { ClipLoader } from "react-spinners"

export const Spinner = () => {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "purple",
    borderWidth: "2px"
  };
  return (
    <div className="grid place-content-center mx-auto">
      <ClipLoader
        color={"purple"}
        loading={true}
        cssOverride={override}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <small className="font-bold text-center text-purple-900">Loading...</small>
    </div>
  )
}

