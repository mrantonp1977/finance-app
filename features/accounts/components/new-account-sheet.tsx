import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useNewAccount } from "../hooks/use-new-account";




export const NewAccountSheet = () => {

  const { isOpen, onClose } = useNewAccount();

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>
            Add a new account
          </SheetTitle>
          <SheetDescription>
            Add a new account to start tracking your transactions.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
};