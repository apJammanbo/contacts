function Right({ selectedContact }) {
  return <div className="col right">{selectedContact ? <p>{selectedContact.name}</p> : "없음"}</div>;
}

export default Right;
