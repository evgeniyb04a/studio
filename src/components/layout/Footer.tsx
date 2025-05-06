import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react'; // Example icons

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto grid max-w-screen-2xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <h3 className="mb-4 text-lg font-semibold">Gardariki</h3>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Clockwork Drakkar. All rights reserved.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Gardariki and Clockwork Drakkar are trademarks or registered trademarks of Clockwork Drakkar.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/game-info" className="text-muted-foreground hover:text-foreground">
                Game Info
              </Link>
            </li>
            <li>
              <Link href="/media" className="text-muted-foreground hover:text-foreground">
                Media Gallery
              </Link>
            </li>
             <li>
              <Link href="/studio-info" className="text-muted-foreground hover:text-foreground">
                Studio Info
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4">
            {/* Replace with actual social media links */}
            <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-foreground">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="YouTube" className="text-muted-foreground hover:text-foreground">
              <Youtube className="h-5 w-5" />
            </Link>
             <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
            </Link>
            {/* Add more social links as needed */}
          </div>
          <h3 className="mt-8 mb-4 text-lg font-semibold">Newsletter</h3>
           <form className="flex space-x-2">
            <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
            <Button type="submit" variant="secondary">Subscribe</Button>
          </form>
        </div>
      </div>
    </footer>
  );
}
