const SkillCard = ({icon:DevIcon , description}) => {
  return(
    <div className="skill-card">
      <DevIcon/>
      <p>
        {description}
      </p>
    </div>
  );
};

export default SkillCard;
