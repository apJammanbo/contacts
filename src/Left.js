import { useState } from "react";
import LeftItem from "./LeftItem";

const filterContact = (contacts, keyword) => {
  return contacts.filter((contact) => {
    return contact.name.includes(keyword);
  });
};

function Left({ contacts, setSelectedContact }) {
  const [keyword, setKeyword] = useState("");

  const handleChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <div className="col left">
      <div className="search-box">
        <input
          value={keyword}
          type="text"
          className="inp-sch"
          placeholder="검색어를 입력하세요."
          onChange={handleChangeKeyword}
        />
      </div>
      <div className="contact-list">
        {/* 이버튼은 기범이가 바보처럼 만듬 */}
        <button className="addTap-button">+</button>
        <ul>
          {filterContact(contacts, keyword).map((contact, index) => (
            <LeftItem key={index} contact={contact} setSelectedContact={setSelectedContact} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Left;
