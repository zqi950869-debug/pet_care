'use client';

import { useEffect, useState } from 'react';

function formatDateTimeLocal(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

function getTomorrowMorningArrivalTime() {
  const arrivalTime = new Date();
  arrivalTime.setDate(arrivalTime.getDate() + 1);
  arrivalTime.setHours(9, 30, 0, 0);

  return formatDateTimeLocal(arrivalTime);
}

export default function ArrivalTimeField() {
  const [arrivalTime, setArrivalTime] = useState('');

  useEffect(() => {
    setArrivalTime(getTomorrowMorningArrivalTime());
  }, []);

  return (
    <label>
      期望到店时间
      <input
        type="datetime-local"
        name="arrivalTime"
        aria-label="期望到店时间"
        value={arrivalTime}
        onChange={(event) => setArrivalTime(event.target.value)}
      />
    </label>
  );
}
