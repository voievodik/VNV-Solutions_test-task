import { FormattedMessage } from "react-intl";

import { ProjectType } from "../../types/ProjectType";
import './projectItem.scss';

type Props = {
  project: ProjectType;
}

export const ProjectItem: React.FC<Props> = ({ project }) => {
  const {
    id,
    linkUrl,
    imgUrl,
    title,
    description,
  } = project;

  return (
    <div className="project-item" key={id}>
      <a
        className="project-item__link"
        href={linkUrl}
        target="_blank"
      >
        <div className="project-item__visit-website">
          <FormattedMessage id="projects.visit" defaultMessage="Visit website" />
        </div>

        <img className="project-item__img" src={imgUrl} />

        <h5 className="project-item__title">
          <FormattedMessage id={title} defaultMessage={title} />
        </h5>

        <p className="project-item__description">
          <FormattedMessage id={description} defaultMessage={description} />
        </p>
      </a>
    </div>
  );
};
