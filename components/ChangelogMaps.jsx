const ulstyle = "list-disc pl-10";
const updateTypeContainerTitle = "text-xl font-medium";

export function ArrayMap({ arr }) {
  return arr.map((f, j) => {
    if (typeof f === "object") {
      return (
        <ul className={ulstyle} key={`changelog_${Math.random()}`}>
          <ArrayMap arr={f} />
        </ul>
      );
    } else {
      return <li key={`changelog_${Math.random()}`}>{f}</li>;
    }
  });
}

export function CategoryMap({ name, data }) {
  return (
    <li>
      <h3 className={updateTypeContainerTitle}>{name}</h3>
      <ul className={ulstyle}>
        <ArrayMap arr={data} />
      </ul>
    </li>
  );
}
