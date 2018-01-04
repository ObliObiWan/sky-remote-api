sky-remote-api

a REST interface for sending remote control commands to a Sky TV box.
It is basic and was ugly, but functional.

Usage

Just start the script, and then open a browser at http://localhost:3000/[ipaddress]/skyq/[command] or http://localhost:3000/[ipaddress]/skyhd/[command]

Where [ipaddress] is the address of the sky box
Where [command] is the command from the remote lists

skyq targets port 5900 and skyhd targets port 49160.

Most sky q boxes target port 5900 some starting Q060 use the old skyhd port.  

status command will only work on skyq boxes

Ports required
3000 tcp
5900 tcp
49160 tcp
9006 tcp


Remote control commands
sky power status on off
tvguide or home boxoffice services or search interactive or sidebar
up down left right select
channelup channeldown i
backup or dismiss text help
play pause rewind fastforward stop record
red green yellow blue
0 1 2 3 4 5 6 7 8 9

Usage as per: https://github.com/dalhundal/sky-remote

Credit to https://github.com/dalhundal/sky-remote for creating the base module.

Nothing more to it.

Usage as per: https://github.com/dalhundal/sky-remote

Credit to https://github.com/dalhundal/sky-remote for creating the base module.
