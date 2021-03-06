
Txtzyme Ping
-----------------
by Ward Cunningham

Parallax makes an ultrasonic distance sensor that it distributes through Radio Shack. The device uses a single signal line for both a trigger signal and a return pulse with duration equal to the sound's travel time.


Things To Try
-------------

Try watching the sensor's output pulse with Javascope.

Compile Javascope.

$ cd projects/javascope
$ javac Scope.java

Try watching the return pulses, 10 per second. Notice how the width changes as objects move in front of the sensor.

$ cd projects/ping
$ java ../javascope/Scope 2
$ sh ping.sh

Try watching the pulse width using the "t" timing command. Here the pulse width is plotted on the vertical axis, where 37000 is the maximum range reported by the device, equal to about 12 feet.

$ cd projects/ping
$ java ../javascope/Scope 37000
$ sh range.sh

Try pointing the device at a large stable reflector. The ceiling might work well. Collect repeated measurements of this single distance to asses the noise content in the measurement.

$ cd projects/ping
$ sh stats.sh
1	19512
5	19588
12	19589
9	19590
4	19592
19	19593
17	19594
31	19595
2	19596

Use Google to calculate the distance to the ceiling:

19595 * 9 / (16 MHz) * (331.5 + 0.6 * 25) m/sec / 2 in feet

This uses the parallax suggested temperature comphensated speed of sound substituting 25 degrees C. Google responds:

(((19 595 * 9) / (16 MHz)) * ((331.5 + (0.6 * 25)) * (m / sec))) / 2 = 6.26507213 feet

Show that, save for one sample, the data varies less than a millimeter:

(19595 - 19588) * 9 / (16 MHz) * (331.5 + 0.6 * 25) m/sec / 2 in mm = 0.682171875 millimeters

Addendum
--------

Further exploration of the measurement stats indicates multiple peaks, spaced 4 to 5 units appart. This is made more visible by drawing a bar for each sample value, including those with zero counts. This is the sort of results we now get:

2	8494	||
9	8495	|||||||||
14	8496	||||||||||||||
32	8497	||||||||||||||||||||||||||||||||
2	8498	||
2	8499	||
46	8500	||||||||||||||||||||||||||||||||||||||||||||||
50	8501	||||||||||||||||||||||||||||||||||||||||||||||||||
98	8502	||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
11	8503	|||||||||||
1	8504	|
4	8505	||||
8	8506	||||||||
11	8507	|||||||||||
1	8508	|

We don't see multiple peaks when we point the sensor into empty space and let it return the maximal pulse. This indicates the multiple peaks are an artifact of the sensor, not our timing measurement.

We note that the spacing between these peaks represents a frequency, 1 / (delta period), of around 400 KHz, 10 times the 40KHz chirp frequency of the sensor.