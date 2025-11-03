import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBug, faUserPlus, faBroadcastTower, faTimes } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import { useState } from "react"

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
  isVisible?: boolean
  onClose: () => void
}

export function RightSidebar({ isVisible = true, onClose }: RightSidebarProps) {
  const [hoveredNotification, setHoveredNotification] = useState<number | null>(null)
  const [hoveredActivity, setHoveredActivity] = useState<number | null>(null)
  const [hoveredContact, setHoveredContact] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  const headerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.1,
      },
    },
  }

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -10, y: 5 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: 10,
      transition: {
        duration: 0.2,
      },
    },
  }

  const notificationItemVariants = {
    initial: {
      opacity: 0,
      x: 400,
      y: -20,
      scale: 0.9,
    },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        delay: index * 0.15,
      },
    }),
    hover: {
      x: 8,
      y: -2,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  }

  const iconVariants = {
    initial: { scale: 0.8, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.15,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  }

  const avatarVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.1,
      filter: "brightness(1.1)",
      transition: {
        duration: 0.2,
      },
    },
  }

  const textVariants = {
    hover: {
      color: "var(--primary)",
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <div>
      {/* Backdrop for mobile/tablet */}
      {isVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      <motion.div
        className={`bg-background overflow-y-auto lg:relative lg:z-auto fixed inset-y-0 right-0 z-50 transition-all duration-300 ${isVisible ? 'w-64 translate-x-0' : 'lg:w-0 translate-x-full'}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
      {/* Header */}
      <motion.div className="px-4 border-b flex items-center justify-between" style={{padding : "16px 16px 20px 16px"}} variants={headerVariants} initial="hidden" animate="visible">
        <motion.h2
          className="text-xl font-bold"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          Notifications
        </motion.h2>
        <button
          onClick={onClose}
          className="lg:hidden p-1 hover:bg-muted rounded"
        >
          <FontAwesomeIcon icon={faTimes} className="h-5 w-5" />
        </button>
      </motion.div>

      <div className="px-4">
        {/* Notifications Section */}
        <motion.div className="mb-6 mt-6" variants={sectionVariants} initial="hidden" animate="visible">
          <motion.h3
            className="text-base font-bold mb-4 text-foreground"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Notifications
          </motion.h3>
          <div className="space-y-4">
            {notifications.map((notification, index) => (
              <motion.div
                key={notification.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                onHoverStart={() => setHoveredNotification(notification.id)}
                onHoverEnd={() => setHoveredNotification(null)}
              >
                <motion.div
                  className="flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors"
                  variants={notificationItemVariants}
                  initial="initial"
                  animate="animate"
                  custom={index}
                  whileHover="hover"
                  style={{
                    backgroundColor: hoveredNotification === notification.id ? "var(--muted)" : "transparent",
                  }}
                >
                  <motion.div
                    className="h-10 w-10 rounded-full bg-muted flex items-center justify-center shrink-0"
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                    whileHover={hoveredNotification === notification.id ? "hover" : "animate"}
                  >
                    <FontAwesomeIcon icon={notification.icon} className="h-5 w-5" />
                  </motion.div>
                  <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
                    <motion.span
                      className="text-sm font-medium truncate"
                      variants={textVariants}
                      whileHover={hoveredNotification === notification.id ? "hover" : {}}
                    >
                      {notification.title}
                    </motion.span>
                    <motion.span
                      className="text-xs text-muted-foreground mt-0.5"
                      initial={{ opacity: 0.6 }}
                      whileHover={hoveredNotification === notification.id ? { opacity: 0.8 } : {}}
                    >
                      {notification.time}
                    </motion.span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Activities Section */}
        <motion.div className="mb-6" variants={sectionVariants} initial="hidden" animate="visible">
          <motion.h3
            className="text-base font-bold mb-4 text-foreground"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
          >
            Activities
          </motion.h3>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                onHoverStart={() => setHoveredActivity(activity.id)}
                onHoverEnd={() => setHoveredActivity(null)}
              >
                <motion.div
                  className="flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors"
                  variants={notificationItemVariants}
                  initial="initial"
                  animate="animate"
                  custom={index}
                  whileHover="hover"
                  style={{
                    backgroundColor: hoveredActivity === activity.id ? "var(--muted)" : "transparent",
                  }}
                >
                  <motion.img
                    src={activity.avatar}
                    alt="User"
                    className="h-10 w-10 rounded-full object-cover shrink-0"
                    variants={avatarVariants}
                    initial="initial"
                    animate="animate"
                    whileHover={hoveredActivity === activity.id ? "hover" : "animate"}
                  />
                  <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
                    <motion.span
                      className="text-sm font-medium truncate"
                      variants={textVariants}
                      whileHover={hoveredActivity === activity.id ? "hover" : {}}
                    >
                      {activity.action}
                    </motion.span>
                    <motion.span
                      className="text-xs text-muted-foreground mt-0.5"
                      initial={{ opacity: 0.6 }}
                      whileHover={hoveredActivity === activity.id ? { opacity: 0.8 } : {}}
                    >
                      {activity.time}
                    </motion.span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contacts Section */}
        <motion.div className="mb-6" variants={sectionVariants} initial="hidden" animate="visible">
          <motion.h3
            className="text-base font-bold mb-4 text-foreground"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Contacts
          </motion.h3>
          <div className="space-y-3">
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                onHoverStart={() => setHoveredContact(contact.id)}
                onHoverEnd={() => setHoveredContact(null)}
              >
                <motion.div
                  className="flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors"
                  variants={notificationItemVariants}
                  initial="initial"
                  animate="animate"
                  custom={index}
                  whileHover="hover"
                  style={{
                    backgroundColor: hoveredContact === contact.id ? "var(--muted)" : "transparent",
                  }}
                >
                  <motion.img
                    src={contact.image}
                    alt={contact.name}
                    className="h-10 w-10 rounded-full object-cover shrink-0"
                    variants={avatarVariants}
                    initial="initial"
                    animate="animate"
                    whileHover={hoveredContact === contact.id ? "hover" : "animate"}
                  />
                  <motion.span
                    className="text-sm font-medium truncate"
                    variants={textVariants}
                    whileHover={hoveredContact === contact.id ? "hover" : {}}
                  >
                    {contact.name}
                  </motion.span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      </motion.div>
    </div>
  )
}
