import { h } from "preact";

import ImageModal from "../ImageModal";

// Mui
import { Grid, Typography } from "@material-ui/core";
import { Code as CodeIcon, Language as WebsiteIcon } from "@material-ui/icons";

export const Project = ({ project }: { project: IProject }) => (
  <Grid container className="project">
    <Grid item xs={12} lg="auto" className="lhs-col">
      <Grid container className="details">
        <Grid item xs>
          <h3>{project.label}</h3>
        </Grid>
        <Grid item xs container className="links">
          {project.web ? (
            <a href={project.web} target="_blank">
              <Grid container alignItems="center">
                <WebsiteIcon className="icon" />
                <Typography>Live Site</Typography>
              </Grid>
            </a>
          ) : null}
          {project.codebase ? (
            <a href={project.codebase} target="_blank">
              <Grid container alignItems="center">
                <CodeIcon className="icon" />
                <Typography>Source</Typography>
              </Grid>
            </a>
          ) : null}
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12} lg>
      <Grid container spacing={4}>
        <Grid item xs={12} xl>
          <Typography variant="body1">
            {project.description}
            {project.keywords.length ? (
              <span className="keywords">
                {" "}
                ({project["keywords"].join(", ")})
              </span>
            ) : null}
          </Typography>
        </Grid>
        {project.images ? (
          <Grid item xs={12} xl>
            <ImageModal images={project.images} />
          </Grid>
        ) : null}
      </Grid>
    </Grid>
  </Grid>
);
