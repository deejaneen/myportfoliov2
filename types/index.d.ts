declare interface ButtonProps {
  title: string;
  altTitle: string;
  link: string;
}
declare interface SectionHeaderProps {
  title: string;
  aboveTitle: string;
  belowTitle: string;
}
declare interface TechnologyProps {
  category: string;
}
declare interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  category: string[];
  liveLink?: string;
  codeLink?: string;
  projectWeight: string;
}

declare interface MyJourneyProps {
  title: string;
  org: string;
  des: string;
  direction: string;
}

declare interface CircleProps {
  icon: React.ReactElement<IconBaseProps>;
}
