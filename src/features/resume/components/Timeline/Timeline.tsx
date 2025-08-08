import Markdown from "react-markdown";

interface TimelineProps {
  data: {
    title: string;
    date: string;
    descriptions: string[];
  }[];
}

const Timeline = ({ data }: TimelineProps) => {
  return (
    <ul>
      {data.map(({ date, title, descriptions }) => {
        return (
          <li key={title} className="mb-15">
            <h2 className="mb-2 font-sans text-2xl font-medium">{title}</h2>
            <p className="mb-2 font-sans text-lg font-medium">{date}</p>
            <ul className="list-disc pl-5">
              {descriptions.map((description, index) => (
                <li key={index}>
                  <Markdown>{description}</Markdown>
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default Timeline;
