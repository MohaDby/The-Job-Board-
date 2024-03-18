const Job = (props) => {
  return (
    <div className={props.className}>
      <h2>{props.title}</h2>
      <div>
        <p>{props.contractType}&nbsp;-&nbsp;</p>
        <p> {props.country}&nbsp;-&nbsp;</p>
        <p> {props.city} </p>
      </div>
    </div>
  );
};

export default Job;
