/** @jsx jsx */
import { jsx, Box, Link } from "theme-ui";

const About = () => {
  return (
    <Box color="black">
      <p>
        Fractal buttons is an app inspired by a geometric shape called{" "}
        <Link
          href="https://en.wikipedia.org/wiki/Sierpinski_carpet"
          sx={{
            variant: "styles.navlink"
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Sierpinski carpet
        </Link>{" "}
        and bubble wrap popping.
      </p>
      <ul sx={{ textAlign: "start" }}>
        <li>
          <Link
            href="https://github.com/mcalus3/recursive-button"
            sx={{
              variant: "styles.navlink",
              p: 2
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github repository
          </Link>
        </li>
        <li>
          <Link
            href="https://mcalus.dev/pages/projects"
            sx={{
              variant: "styles.navlink",
              p: 2
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            More projects like this
          </Link>
        </li>
      </ul>
      Made by{" "}
      <Link
        href="https://mcalus.dev"
        sx={{
          variant: "styles.navlink"
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        Marek Całus
      </Link>
    </Box>
  );
};

export default About;
