const Triggerchild = ({ clocks }) => {
  console.log("child comp was updated");

  return (
    <div>
      <h2>{clocks}</h2>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id iste ipsum
      saepe, in natus pariatur blanditiis nihil autem, odio sit neque suscipit
      illo, tempora tenetur consequuntur. Saepe, vitae maxime! Quasi.
    </div>
  );
};

export default Triggerchild;
