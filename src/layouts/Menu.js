import Link from "next/link";
import { Fragment } from "react";

export const Home = () => (
  <Fragment>
    <li>
      <Link href="/">Home One</Link>
    </li>
    <li>
      <Link href="/index-2">Home Two</Link>
    </li>
    <li>
      <Link href="/index-3">Home Three</Link>
    </li>
  </Fragment>
);

export const About = () => (
  <li>
    <Link href="/about">About</Link>
  </li>
);
export const Services = () => (
  <Fragment>
    <li>
      <Link href="/services-1">Services Style 01</Link>
    </li>
    <li>
      <Link href="/services-details">Service Details</Link>
    </li>
  </Fragment>
);
export const Team = () => (
  <Fragment>
    <li>
      <Link href="/team">Team Member</Link>
    </li>
    <li>
      <Link href="/team-details">Team Details</Link>
    </li>
  </Fragment>
);
export const Pages = () => (
  <Fragment>
    <li>
      <Link href="/company-history">Company History</Link>
    </li>
    <li>
      <Link href="/portfolio-1">Portfolio Grid</Link>
    </li>
    <li>
      <Link href="/portfolio-2">Portfolio Masonry</Link>
    </li>
    <li>
      <Link href="/portfolio-details">Portfolio Details</Link>
    </li>
    <li>
      <Link href="/faq">FAQ Page</Link>
    </li>
    <li>
      <Link href="/testimonial">Testimonials</Link>
    </li>
    <li>
      <Link href="/pricing">Pricing</Link>
    </li>
    <li>
      <Link href="/career">Career</Link>
    </li>
    <li>
      <Link href="/404">Error Page</Link>
    </li>
  </Fragment>
);
export const News = () => (
  <Fragment>
    <li>
      <Link href="/news">News Grid</Link>
    </li>
    <li>
      <Link href="/news-2">News Standard</Link>
    </li>
    <li>
      <Link href="/news-details">News Details</Link>
    </li>
  </Fragment>
);
export const Contact = () => (
  <Fragment>
    <li>
      <Link href="/contact">Contact</Link>
    </li>
  </Fragment>
);
