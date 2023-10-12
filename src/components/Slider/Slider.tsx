import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Fade } from "react-awesome-reveal";

import { projects, responsive } from "../../utils/constants";
import { ProjectItem } from "../ProjectItem";

const Slider = () => {
  return (
    <Carousel
      responsive={responsive}
      arrows={false}
      showDots={true}
      infinite={true}
      partialVisible={false}
    >
      {projects.map((project) => {
        return (
          <Fade direction="up" triggerOnce>
            <ProjectItem project={project} key={project.id} />
          </Fade>
        );
      })}
    </Carousel>
  );
};
export default Slider;
