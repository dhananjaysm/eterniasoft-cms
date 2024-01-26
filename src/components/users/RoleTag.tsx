interface RoleTagProps {
    role: string;
  }
  
  export const RoleTag: React.FC<RoleTagProps> = ({ role }) => {
    const roleColorMap: { [key: string]: string } = {
      super: "bg-red-500",
      internal: "bg-green-500",
      editor: "bg-blue-500",
      // Add more roles and their associated colors as needed
    };
  
    const defaultColor = "bg-bodydark";
    const colorClass = roleColorMap[role.toLowerCase()] || defaultColor;
  
    return (
      <span
        className={`${colorClass} text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded`}
      >
        {role}
      </span>
    );
  };