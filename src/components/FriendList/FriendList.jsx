import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";
const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={styles.list}>
        {friends.map((friend) => (
          <li key={friend.id} className={styles.item}>
            <FriendListItem friend={friend} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
