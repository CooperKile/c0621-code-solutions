CAT(1)                          User Commands                         CAT(1)

NNAAMMEE
       cat - concatenate files and print on the standard output

SSYYNNOOPPSSIISS
       ccaatt [_O_P_T_I_O_N]... [_F_I_L_E]...

DDEESSCCRRIIPPTTIIOONN
       Concatenate FILE(s) to standard output.

       With no FILE, or when FILE is -, read standard input.

       --AA, ----sshhooww--aallll
              equivalent to --vvEETT

       --bb, ----nnuummbbeerr--nnoonnbbllaannkk
              number nonempty output lines, overrides --nn

       --ee     equivalent to --vvEE

       --EE, ----sshhooww--eennddss
              display $ at end of each line

       --nn, ----nnuummbbeerr
              number all output lines

       --ss, ----ssqquueeeezzee--bbllaannkk
              suppress repeated empty output lines

       --tt     equivalent to --vvTT

       --TT, ----sshhooww--ttaabbss
              display TAB characters as ^I

       --uu     (ignored)

       --vv, ----sshhooww--nnoonnpprriinnttiinngg
              use ^ and M- notation, except for LFD and TAB

       ----hheellpp display this help and exit

       ----vveerrssiioonn
              output version information and exit

EEXXAAMMPPLLEESS
       cat f - g
              Output f's contents, then standard input, then g's contents.

       cat    Copy standard input to standard output.

AAUUTTHHOORR
       Written by Torbjorn Granlund and Richard M. Stallman.

RREEPPOORRTTIINNGG BBUUGGSS
       GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
       Report cat translation bugs to <https://translationproject.org/team/>

CCOOPPYYRRIIGGHHTT
       Copyright  © 2018 Free Software Foundation, Inc.  License GPLv3+: GNU
       GPL version 3 or later <https://gnu.org/licenses/gpl.html>.
       This is free software: you are free to change  and  redistribute  it.
       There is NO WARRANTY, to the extent permitted by law.

SSEEEE AALLSSOO
       ttaacc(1)

       Full documentation at: <https://www.gnu.org/software/coreutils/cat>
       or available locally via: info '(coreutils) cat invocation'

GNU coreutils 8.30             September 2019                         CAT(1)
