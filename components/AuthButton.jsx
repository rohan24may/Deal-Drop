"use client";

import AuthModal from "./AuthModal";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LogIn,LogOut  } from "lucide-react";
import { signOut } from "@/app/actions";


const AuthButton = ({ user }) => {
  const [showAuthModal, setShowAuthModal] = useState(false);

if (user) {
    return (
      <form action={signOut}>
        <Button variant="ghost" size="sm" type="submit" className="gap-2
  hover:bg-gray-200
  hover:text-gray-900
  transition-colors
  cursor-pointer">
          <LogOut className="w-4 h-4" />
          Sign Out
        </Button>
      </form>
    );
  }


  return (
    <>
      <Button
        onClick={() => setShowAuthModal(true)}
        variant="default"
        size="sm"
        className="bg-orange-500 hover:bg-orange-600 gap-2 cursor-pointer"
      >
        <LogIn className="w-4 h-4" />
        Sign In
      </Button>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
}
export default AuthButton;
