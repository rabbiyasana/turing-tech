function ArchivePill(archived, ...props) {
  return (
    <div className="nav nav-pills">
      <li className="active">
        <a>{props.status}</a>
        {archived ? "Archived" : "Unarchive"}
      </li>
    </div>
  );
}
export default ArchivePill;
