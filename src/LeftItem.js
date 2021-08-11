function LeftItem({ contact, setSelectedContact }) {
  const handleSelect = () => {
    setSelectedContact(contact);
  };
  return (
    <li>
      <button type="button" onClick={handleSelect}>
        <div className="profile flex-row">
          <img className="profile-img" src={contact.img} alt="프로필이미지" />
          <div className="profile-name">{`이름: ${contact.name}`}</div>
        </div>
      </button>
    </li>
  );
}

export default LeftItem;
