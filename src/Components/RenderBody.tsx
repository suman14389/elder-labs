import { useParams } from "react-router-dom";
import Transactions from "./Transactions";
import Validators from "./Validators";
import Blocks from "./Blocks";
import Modules from "./Modules";
import Proposals from "./Proposals";
import Nfts from "./Nfts";
import Overview from "./Overview";

const RenderBody = () => {
  const { tab } = useParams();

  const renderComponent = () => {
    switch (tab) {
      case "transactions":
        return <Transactions />;
      case "blocks":
        return <Blocks />;
      case "validators":
        return <Validators />;
      case "proposals":
        return <Proposals />;
      case "modules":
        return <Modules />;
      case "nfts":
        return <Nfts />;
      default:
        return <Overview />;
    }
  };

  return <div>{renderComponent()}</div>;
};

export default RenderBody;
