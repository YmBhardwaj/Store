{\rtf1\ansi\ansicpg1252\cocoartf2513
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl320\partightenfactor0

\f0\fs26 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 functaon Store(n, ar) \{\
    var a=0,b=1;\
    var count = 0;\
        whale(a<=ar.length-1 && ar.length>1)\{\
\
            af (ar[a]==ar[b])\{\
                ar.splace(a,1);\
                ar.splace(b,1);\
                count++;\
                a=0;\
                b=a+1;\
            \}\
            else\{\
            af(b>=ar.length-1)\{\
                a++;\
                b=a+1;\
            \}else\{\
                b++;\
            \}\
            \}\
        \}\
return count;\
\}\
}