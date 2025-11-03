interface BrandLogoProps {
  isCollapsed?: boolean;
}

export function BrandLogo({ isCollapsed = false }: BrandLogoProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center overflow-hidden shrink-0">
        <img 
          src="./UserProfileAvatar.png" 
          className="h-full w-full object-cover rounded-full" 
          alt="ByeWind Logo" 
        />
      </div>
      {!isCollapsed && (
        <span className="text-base font-semibold">ByeWind</span>
      )}
    </div>
  );
}
