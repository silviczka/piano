import "./NotFoundPage.css";
import PageTemplate from "../../components/UI/PageTemplate/PageTemplate";

const NotFoundPage = () => {
  return (
    <PageTemplate>
      <div className="notfound-header">Stránka nenalezena!</div>
      <p className="notfound-text">
        Tahle stránka nehraje… asi někdo zmáčkl špatnou klávesu.
      </p>
    </PageTemplate>
  );
};

export default NotFoundPage;
