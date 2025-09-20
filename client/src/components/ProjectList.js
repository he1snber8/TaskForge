// client/src/components/ProjectList.js
export default function ProjectList({ projects, onSelect }){
  return (
    <select onChange={e => onSelect(e.target.value)}>
      {projects.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
    </select>
  );
}