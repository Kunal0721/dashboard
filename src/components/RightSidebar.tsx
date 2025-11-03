import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBug,
  faUserPlus,
  faBroadcastTower,
} from "@fortawesome/free-solid-svg-icons";

const notifications = [
  { id: 1, title: "You have a bug that needs...", time: "Just now", icon: faBug },
  { id: 2, title: "New user registered", time: "59 minutes ago", icon: faUserPlus },
  { id: 3, title: "You have a bug that needs...", time: "12 hours ago", icon: faBug },
  { id: 4, title: "Andi Lane subscribed to you", time: "Today, 11:59 AM", icon: faBroadcastTower },
]

const activities = [
  { id: 1, action: "You have a bug that needs...", time: "Just now", avatar: "/images/NataliCraig.png" },
  { id: 2, action: "Released a new version", time: "59 minutes ago", avatar: "/images/DrewCano.png" },
  { id: 3, action: "Submitted a bug", time: "12 hours ago", avatar: "/images/OrlandoDiggs.png" },
  { id: 4, action: "Modified A data in Page X", time: "Today, 11:59 AM", avatar: "/images/AndiLane.png" },
  { id: 5, action: "Deleted a page in Project X", time: "Feb 2, 2023", avatar: "/images/KateMorrison.png" },
]

const contacts = [
  { id: 1, name: "Natali Craig", image: "/images/NataliCraig.png" },
  { id: 2, name: "Drew Cano", image: "/images/DrewCano.png" },
  { id: 3, name: "Orlando Diggs", image: "/images/OrlandoDiggs.png" },
  { id: 4, name: "Andi Lane", image: "/images/AndiLane.png" },
  { id: 5, name: "Kate Morrison", image: "/images/KateMorrison.png" },
]

interface RightSidebarProps {
  isVisible?: boolean;
}

export function RightSidebar({ isVisible = true }: RightSidebarProps) {
  if (!isVisible) return null;

  return (
    <div className="w-64 border-l bg-background overflow-y-auto">
      <div className="px-4 border-b" style={{padding : "16px 16px 20px 16px"}}>
        <h2 className="text-xl font-bold">Notifications</h2>
      </div>
      <div className="px-4">
        {/* Notifications Section */}
        <div className="mb-6 mt-6">
          <h3 className="text-base font-bold mb-4 text-foreground">
            Notifications
          </h3>
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div key={notification.id}>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <FontAwesomeIcon icon={notification.icon} className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-sm font-medium truncate">{notification.title}</span>
                    <span className="text-xs text-muted-foreground mt-0.5">{notification.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activities Section */}
        <div className="mb-6">
          <h3 className="text-base font-bold mb-4 text-foreground">
            Activities
          </h3>
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id}>
                <div className="flex items-start gap-3">
                  <img
                    src={activity.avatar}
                    alt="User"
                    className="h-10 w-10 rounded-full object-cover shrink-0"
                  />
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-sm font-medium truncate">{activity.action}</span>
                    <span className="text-xs text-muted-foreground mt-0.5">{activity.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contacts Section */}
        <div className="mb-6">
          <h3 className="text-base font-bold mb-4 text-foreground">Contacts</h3>
          <div className="space-y-3">
            {contacts.map((contact) => (
              <div key={contact.id}>
                <div className="flex items-center gap-3">
                  <img
                    src={contact.image}
                    alt={contact.name}
                    className="h-10 w-10 rounded-full object-cover shrink-0"
                  />
                  <span className="text-sm font-medium truncate">{contact.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
