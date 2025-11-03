import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search, Plus, SlidersHorizontal, ArrowUpDown, ChevronLeft, ChevronRight, MoreHorizontal, Calendar, Copy } from "lucide-react";

const initialOrders = [
  {
    id: "#CM9801",
    user: { name: "Natali Craig", avatar: "/images/NataliCraig.png" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "in-progress",
  },
  {
    id: "#CM9802",
    user: { name: "Kate Morrison", avatar: "/images/KateMorrison.png" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "complete",
  },
  {
    id: "#CM9803",
    user: { name: "Drew Cano", avatar: "/images/DrewCano.png" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "pending",
  },
  {
    id: "#CM9804",
    user: { name: "Orlando Diggs", avatar: "/images/OrlandoDiggs.png" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "approved",
  },
  {
    id: "#CM9805",
    user: { name: "Andi Lane", avatar: "/images/AndiLane.png" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "rejected",
  },
  {
    id: "#CM9801",
    user: { name: "Natali Craig", avatar: "/images/NataliCraig.png" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "in-progress",
  },
  {
    id: "#CM9802",
    user: { name: "Kate Morrison", avatar: "/images/KateMorrison.png" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "complete",
  },
  {
    id: "#CM9803",
    user: { name: "Drew Cano", avatar: "/images/DrewCano.png" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "pending",
  },
  {
    id: "#CM9804",
    user: { name: "Orlando Diggs", avatar: "/images/OrlandoDiggs.png" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "approved",
  },
  {
    id: "#CM9805",
    user: { name: "Andi Lane", avatar: "/images/AndiLane.png" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "rejected",
  },
];

const statusConfig = {
  "in-progress": { label: "In Progress", color: "text-blue-600 bg-blue-50 dark:bg-blue-950/30 dark:text-blue-400" },
  complete: { label: "Complete", color: "text-green-600 bg-green-50 dark:bg-green-950/30 dark:text-green-400" },
  pending: { label: "Pending", color: "text-blue-500 bg-blue-50 dark:bg-blue-950/30 dark:text-blue-300" },
  approved: { label: "Approved", color: "text-yellow-600 bg-yellow-50 dark:bg-yellow-950/30 dark:text-yellow-400" },
  rejected: { label: "Rejected", color: "text-gray-600 bg-gray-100 dark:bg-gray-800 dark:text-gray-400" },
};

export default function OrderList() {
const [orders, setOrders] = useState(initialOrders);
const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
const [currentPage, setCurrentPage] = useState(1);
const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newOrder, setNewOrder] = useState({
    userName: '',
    project: '',
    address: '',
  });
  const itemsPerPage = 10;

  // Filter and sort orders
  const filteredOrders = orders
    .filter((order) => {
      const query = searchQuery.toLowerCase();
      return (
        order.id.toLowerCase().includes(query) ||
        order.user.name.toLowerCase().includes(query) ||
        order.project.toLowerCase().includes(query) ||
        order.address.toLowerCase().includes(query)
      );
    })
    .sort((a, b) => {
      if (!sortOrder) return 0;
      const nameA = a.user.name.toLowerCase();
      const nameB = b.user.name.toLowerCase();
      if (sortOrder === 'asc') {
        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
      } else {
        return nameA > nameB ? -1 : nameA < nameB ? 1 : 0;
      }
    });

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleOrder = (orderId: string) => {
    setSelectedOrders((prev) =>
      prev.includes(orderId)
        ? prev.filter((id) => id !== orderId)
        : [...prev, orderId]
    );
  };

  // Reset to page 1 and clear sort when search changes
  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
    setSortOrder(null);
  };

  const generateOrderId = () => {
    const randomNum = Math.floor(Math.random() * 10000);
    return `#CM${randomNum.toString().padStart(4, '0')}`;
  };

  const handleAddOrder = () => {
    const newOrderData = {
      id: generateOrderId(),
      user: { name: newOrder.userName, avatar: '' },
      project: newOrder.project,
      address: newOrder.address,
      date: 'Just now',
      status: 'pending' as const,
    };
    setOrders((prev) => [...prev, newOrderData]);
    setNewOrder({ userName: '', project: '', address: '' });
    setIsModalOpen(false);
  };

  return (
    <div className="flex-1 p-3 md:p-6 lg:p-8 text-xs">
      {/* Header */}
      <div className="mb-4 md:mb-6">
        <h1 className="text-xs font-bold">Order List</h1>
      </div>

      {/* Toolbar */}
      <div className="mb-4 md:mb-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-muted/30 dark:bg-muted/10 p-3 md:p-4 rounded-lg">
        <div className="flex items-center gap-1.5 md:gap-2">
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 md:h-10 md:w-10 hover:bg-[hsl(0,1%,10%)]">
                <Plus className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Order</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">User Name</label>
                  <Input
                    value={newOrder.userName}
                    onChange={(e) => setNewOrder((prev) => ({ ...prev, userName: e.target.value }))}
                    placeholder="Enter user name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Project</label>
                  <Input
                    value={newOrder.project}
                    onChange={(e) => setNewOrder((prev) => ({ ...prev, project: e.target.value }))}
                    placeholder="Enter project name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Address</label>
                  <Input
                    value={newOrder.address}
                    onChange={(e) => setNewOrder((prev) => ({ ...prev, address: e.target.value }))}
                    placeholder="Enter address"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleAddOrder}>
                    Add Order
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <Button variant="ghost" size="icon" className="h-8 w-8 md:h-10 md:w-10 hover:bg-[hsl(0,1%,10%)]">
            <SlidersHorizontal className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 md:h-10 md:w-10 hover:bg-[hsl(0,1%,10%)]"
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
          >
            <ArrowUpDown className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </div>
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-2.5 md:left-3 top-1/2 h-3.5 w-3.5 md:h-4 md:w-4 -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="Search" 
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-8 md:pl-9 h-9 md:h-10 bg-background border-border text-xs"
          />
        </div>
      </div>

      {/* Mobile Cards View */}
      <div className="lg:hidden space-y-3">
        {paginatedOrders.length === 0 ? (
          <div className="bg-background border rounded-lg p-8 text-center">
            <p className="text-muted-foreground">No orders found</p>
          </div>
        ) : (
          paginatedOrders.map((order, index) => (
            <div
              key={`${order.id}-${index}`}
              className="bg-background border rounded-lg p-4 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Checkbox
                    className="h-4 w-4"
                    checked={selectedOrders.includes(order.id)}
                    onCheckedChange={() => toggleOrder(order.id)}
                  />
                  <span className="font-medium text-xs">{order.id}</span>
                </div>
                {order.status === "rejected" && index === 4 && (
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                )}
              </div>
              
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={order.user.avatar} />
                  <AvatarFallback className="text-xs">{order.user.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-xs">{order.user.name}</p>
                  <p className="text-xs text-muted-foreground">{order.project}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="font-medium">Address:</span>
                  <span>{order.address}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{order.date}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t">
                <div className={`h-2 w-2 rounded-full ${
                  order.status === "in-progress" ? "bg-blue-600" :
                  order.status === "complete" ? "bg-green-600" :
                  order.status === "pending" ? "bg-blue-500" :
                  order.status === "approved" ? "bg-yellow-500" :
                  "bg-gray-500"
                }`} />
                <span className={`text-xs ${statusConfig[order.status as keyof typeof statusConfig].color}`}>
                  {statusConfig[order.status as keyof typeof statusConfig].label}
                </span>
              </div>
            </div>
          ))
        )}
        
        {/* Mobile Pagination */}
        {paginatedOrders.length > 0 && (
          <div className="flex items-center justify-center gap-1 pt-4">
            <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 bg-[hsl(0,0%,95%)] text-black"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map((page) => (
              <Button
              key={page}
              variant={currentPage === page ? "default" : "ghost"}
              size="icon"
              className="h-8 w-8 text-xs bg-[hsl(0,0%,95%)] text-black"
              onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
            <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 bg-[hsl(0,0%,95%)] text-black"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block bg-background border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/30 dark:bg-muted/10">
                <th className="w-10 md:w-12 py-3 md:py-4 px-3 md:px-6">
                  <Checkbox className="h-4 w-4" />
                </th>
                <th className="text-left py-3 md:py-4 px-3 md:px-6 text-xs font-medium text-muted-foreground">
                  Order ID
                </th>
                <th className="text-left py-3 md:py-4 px-3 md:px-6 text-xs font-medium text-muted-foreground">
                  User
                </th>
                <th className="text-left py-3 md:py-4 px-3 md:px-6 text-xs font-medium text-muted-foreground">
                  Project
                </th>
                <th className="text-left py-3 md:py-4 px-3 md:px-6 text-xs font-medium text-muted-foreground">
                  Address
                </th>
                <th className="text-left py-3 md:py-4 px-3 md:px-6 text-xs font-medium text-muted-foreground">
                  Date
                </th>
                <th className="text-left py-3 md:py-4 px-3 md:px-6 text-xs font-medium text-muted-foreground">
                  Status
                </th>
                <th className="w-10 md:w-12 py-3 md:py-4 px-3 md:px-6"></th>
              </tr>
            </thead>
            <tbody>
              {paginatedOrders.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-muted-foreground">
                    No orders found
                  </td>
                </tr>
              ) : (
                paginatedOrders.map((order, index) => (
                <tr
                  key={`${order.id}-${index}`}
                  className="border-b last:border-0 hover:bg-muted/20 transition-colors"
                >
                  <td className="py-3 md:py-4 px-3 md:px-6">
                    <Checkbox
                      className="h-4 w-4"
                      checked={selectedOrders.includes(order.id)}
                      onCheckedChange={() => toggleOrder(order.id)}
                    />
                  </td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-xs font-medium">{order.id}</td>
                  <td className="py-3 md:py-4 px-3 md:px-6">
                    <div className="flex items-center gap-2 md:gap-3">
                      <Avatar className="h-7 w-7 md:h-9 md:w-9">
                        <AvatarImage src={order.user.avatar} />
                        <AvatarFallback className="text-xs">{order.user.name[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-xs font-medium truncate max-w-[120px] md:max-w-none">{order.user.name}</span>
                    </div>
                  </td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-xs">{order.project}</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-xs">
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <span className="truncate max-w-[150px] md:max-w-none">{order.address}</span>
                      {order.status === "rejected" && index === 4 && (
                        <Copy className="h-3 w-3 text-muted-foreground shrink-0" />
                      )}
                    </div>
                  </td>
                  <td className="py-3 md:py-4 px-3 md:px-6">
                    <div className="flex items-center gap-1.5 md:gap-2 text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5 md:h-4 md:w-4 shrink-0" />
                      <span className="text-xs whitespace-nowrap">{order.date}</span>
                    </div>
                  </td>
                  <td className="py-3 md:py-4 px-3 md:px-6">
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <div className={`h-1.5 w-1.5 md:h-2 md:w-2 rounded-full shrink-0 ${
                        order.status === "in-progress" ? "bg-blue-600" :
                        order.status === "complete" ? "bg-green-600" :
                        order.status === "pending" ? "bg-blue-500" :
                        order.status === "approved" ? "bg-yellow-500" :
                        "bg-gray-500"
                      }`} />
                      <span className={`text-xs whitespace-nowrap ${statusConfig[order.status as keyof typeof statusConfig].color}`}>
                        {statusConfig[order.status as keyof typeof statusConfig].label}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 md:py-4 px-3 md:px-6">
                    {order.status === "rejected" && index === 4 && (
                      <Button variant="ghost" size="icon" className="h-7 w-7 md:h-8 md:w-8">
                        <MoreHorizontal className="h-3.5 w-3.5 md:h-4 md:w-4" />
                      </Button>
                    )}
                  </td>
                </tr>
              ))
              )}
            </tbody>
          </table>
        </div>

        {/* Desktop Pagination */}
        {paginatedOrders.length > 0 && (
        <div className="flex items-center justify-end gap-1 p-4 border-t">
          <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 md:h-9 md:w-9 bg-[hsl(0,0%,95%)] text-black"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          >
            <ChevronLeft className="h-3.5 w-3.5 md:h-4 md:w-4" />
          </Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "ghost"}
              size="icon"
              className="h-8 w-8 md:h-9 md:w-9 text-xs bg-[hsl(0,0%,95%)] text-black"
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          ))}
          <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 md:h-9 md:w-9 bg-[hsl(0,0%,95%)] text-black"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
          </Button>
        </div>
        )}
      </div>
    </div>
  );
}
