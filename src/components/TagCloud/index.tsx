import { Cloud, renderSimpleIcon } from "react-icon-cloud";

import {
  siJss,
  siHtml5,
  siDocker,
  siCss3,
  siNodedotjs,
  siReact,
  siGit,
  siPython,
  siDjango,
  siPostgresql,
  siTypescript,
} from "simple-icons/icons";

const TagCloud = () => {
  const icons = [
    siJss,
    siHtml5,
    siDocker,
    siCss3,
    siNodedotjs,
    siReact,
    siGit,
    siPython,
    siDjango,
    siPostgresql,
    siTypescript,
  ];

  const renderIcons = icons.map((icon) => {
    return renderSimpleIcon({
      icon,
      size: 100,
      // style={{}}
      aProps: {
        onClick: (e: any) => e.preventDefault(),
      },
    });
  });
  return (
    <Cloud
      options={{
        wheelZoom: false,
        initial: [0.1, 0.1],
        shape: "hring",
        minSpeed: 0.1,
        maxSpeed: 0.1,
        frontSelect: true,
        outlineMethod: "size",
        outlineIncrease: 10,
        activeCursor: "default",
        freezeDecel: true,
      }}
    >
      {renderIcons}
    </Cloud>
  );
};

export default TagCloud;
