import { UserInfo } from "models/generic.model";

const UserComponent = ({ className = "", users }: Props) => {
  const content = users.map(({ firstName, lastName }) => {
    <li>
      {firstName} {lastName}
    </li>;
  });

  return <ul className={`user-info ${className}`}>{content}</ul>;
};

type Props = {
  users: UserInfo[];
  className?: string;
};

export default UserComponent;
