"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface CountdownTimerProps {
  targetDate: Date;
  title?: string;
}

export function CountdownTimer({ targetDate, title = "Early Bird termina em:" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: "dias" },
    { value: timeLeft.hours, label: "horas" },
    { value: timeLeft.minutes, label: "min" },
    { value: timeLeft.seconds, label: "seg" }
  ];

  return (
    <Card className="bg-primary/5 border border-primary/20">
      <CardContent className="p-6">
        <div className="text-center space-y-4">
          <p className="text-sm font-medium text-primary">{title}</p>
          
          <div className="flex justify-center gap-4">
            {timeUnits.map((unit, index) => (
              <div key={index} className="bg-background rounded-lg p-3 min-w-16 shadow-sm">
                <div className="text-2xl font-bold text-primary">
                  {unit.value.toString().padStart(2, '0')}
                </div>
                <div className="text-xs text-muted-foreground uppercase font-medium">
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-xs text-muted-foreground">
            Economize €200 no early bird
          </p>
        </div>
      </CardContent>
    </Card>
  );
}