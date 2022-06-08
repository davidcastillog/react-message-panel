import "./TableOfMessages.css";
import messagesData from "../../assets/mockData.json";
import { useEffect } from "react";
import { StatusMark } from "../StatusMark/StatusMark";
import { CriticalMark } from "../CriticalMark/CriticalMark";

const TableOfMessages = ({
  messages,
  setMessages,
  messageSelected,
  setMessageSelected,
}) => {
  // Change date to format DD/MM/YYYY
  const dateFormat = (date) => {
    const newDate = new Date(date); // Convert to date object
    const dateString = `${newDate.getDate()}.${
      newDate.getMonth() + 1 // Add 1 to get month as it starts at 0
    }.${newDate.getFullYear()}`;
    return dateString;
  };

  // Change name to N. Lastname format
  const nameFormat = (name) => {
    const oldName = name.split(" ");
    const firstName = oldName[0];
    const lastName = oldName[1];
    return `${firstName[0]}. ${lastName}`;
  };

  // Show only first 6 words of subject
  const subjectFormat = (subject) => {
    const words = subject.split(" ");
    const newSubject = words.slice(0, 6).join(" ");
    return newSubject;
  };

  // Show only first 3 words of discipline
  const disciplineFormat = (discipline) => {
    const words = discipline.split(" ");
    const newDiscipline = words.slice(0, 3).join(" ");
    return newDiscipline;
  };

  // Set row as active if the user clicks on it
  const setActiveRow = (message) => {
    setMessageSelected({
      num: message.num,
      message: message.message,
      subject: message.subject,
      discipline: message.discipline,
      sentTo: message.sentTo,
      regDate: dateFormat(message.regDate),
      status: message.status,
      critical: message.critical,
      name: nameFormat(message.sentTo.name),
      company: message.sentTo.company,
    })
  };

  // Sort messages by date in descending order
  const sortMessages = (messages) => {
    return messages.sort((a, b) => {
      return new Date(b.regDate) - new Date(a.regDate);
    });
  };

  useEffect(() => {
    setMessages(sortMessages(messagesData));
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Num</th>
            <th>Discipline</th>
            <th>Reg. Date</th>
            <th>Sent to:</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Critical</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr
              key={message.num}
              className={
                messageSelected.num === message.num
                  ? "table-row-active"
                  : "table-row"
              }
              onClick={(e) => {
                setActiveRow(message);
              }}
            >
              <td className="table-message">{message.num}</td>
              <td>{disciplineFormat(message.discipline)}</td>
              <td>{dateFormat(message.regDate)}</td>
              <td>{nameFormat(message.sentTo.name)}</td>
              <td>{subjectFormat(message.subject)}</td>
              <td>
                <StatusMark status={message.status} />
              </td>
              <td>
                <CriticalMark isCritical={message.critical} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableOfMessages;
