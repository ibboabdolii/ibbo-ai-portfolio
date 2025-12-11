'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { BarChart3, Globe, MessageSquare, Sparkles } from 'lucide-react';
import Image from 'next/image';

interface FastfolioPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  hasReachedLimit?: boolean;
}

export function FastfolioPopup({
  open,
  onOpenChange,
  hasReachedLimit = false,
}: FastfolioPopupProps) {
  const handleCTA = () => {
    // اینجا انتخاب کن می‌خوای کجا بره:
    // 1) ایمیل مستقیم:
    // window.location.href = 'mailto:ibbo.abdoli@elektroautomatik.se?subject=Contact%20regarding%20automation%20projects';

    // 2) یا وب‌سایت/لینکدین:
    window.open('https://ibboabdoli.com', '_blank');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden border-none p-0 sm:max-w-[500px]">
        <div className="relative">
          <Image
            src="/ibbo-ai-preview.png" // یک تصویر کاور برای خودت در public بگذار
            alt="Ibbo AI Preview"
            width={500}
            height={250}
            className="h-[200px] w-full object-cover"
          />
        </div>

        <div className="space-y-8 p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {hasReachedLimit ? (
                <>You&apos;ve reached the chat limit</>
              ) : (
                <>
                  Interested in{' '}
                  <span className="text-[#4c55fa]">working together?</span>
                </>
              )}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {hasReachedLimit ? (
                <>
                  If you want to continue the conversation or discuss a real
                  project, feel free to reach out to me directly.
                </>
              ) : (
                <>
                  I&apos;m a Service Engineer & Automation Technician working
                  with PLC, ABB robots and industrial electrical systems in
                  Sweden. If you&apos;re looking for help with automation,
                  service, troubleshooting or projects – let&apos;s connect.
                </>
              )}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <MessageSquare className="mt-0.5 h-5 w-5 text-[#4c55fa]" />
              <div>
                <p className="text-sm font-medium">
                  Real-world industrial experience
                </p>
                <p className="text-xs text-muted-foreground">
                  Field work at Scania, Lantmännen, Meritor, Volvo and more.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Sparkles className="mt-0.5 h-5 w-5 text-[#4c55fa]" />
              <div>
                <p className="text-sm font-medium">
                  Automation, PLC & robotics
                </p>
                <p className="text-xs text-muted-foreground">
                  PLC troubleshooting, ABB IRC5, motion supervision, sensors and
                  production lines.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Globe className="mt-0.5 h-5 w-5 text-[#4c55fa]" />
              <div>
                <p className="text-sm font-medium">
                  Based in Sweden, open to projects
                </p>
                <p className="text-xs text-muted-foreground">
                  Available for industrial service and automation work.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <BarChart3 className="mt-0.5 h-5 w-5 text-[#4c55fa]" />
              <div>
                <p className="text-sm font-medium">
                  Focus on reliability & uptime
                </p>
                <p className="text-xs text-muted-foreground">
                  Helping factories reduce downtime and keep production running.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              onClick={handleCTA}
              className="flex-1 cursor-pointer border-none bg-[#4c55fa] hover:bg-[#4c55fa]/80"
            >
              Contact Ibbo
            </Button>
          </div>

          {/* اگر خواستی می‌تونی اینجا یه متن کوچیک برند خودت بذاری
          <p className="text-center text-xs text-muted-foreground">
            Ibbo AI Portfolio • ibboabdoli.com
          </p>
          */}
        </div>
      </DialogContent>
    </Dialog>
  );
}
