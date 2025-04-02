---
sidebar_position: 4
title: Conversion to BIP39
slug: /basics/private-keys/bip39
tags: [private keys, random number, entropy, bip39, seed]
---

# Private Key Conversion

Writing down a binary private key accurately is difficult for humans, and entering it correctly into a wallet is even harder. A single mistake could lead to losing Bitcoin. While a computer can detect errors using a checksum, handwritten notes cannot.

## Converting Binary to Decimal

One way to make private keys easier to write is by converting them from binary to decimal. If the binary is divided into 11-digit chunks, the largest possible value for each chunk is **2047** (since 11-bit binary numbers range from `00000000000` to `11111111111`, which is 0 to 2047 in decimal).

This means a private key can be written as **24 groups of decimal numbers**, each ranging from **0 to 2047**. This format is easier to write but still prone to errors.

## The BIP39 Solution: Using Words Instead of Numbers

To reduce errors, [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) introduced a method where each decimal number is replaced with a word from a fixed list of **2048 words**. These words were carefully selected to minimize misinterpretation. The list is available in multiple languages, and each word corresponds to a number from **0 to 2047**.

Using words instead of numbers is how **seed phrases** work. When you enter a seed phrase into a wallet, the software converts each word back into an 11-digit binary number, then combines them all into a **264-bit binary private key** (for a 24-word phrase). The last word includes **checksum bits**, so it is not fully random. A **12-word seed phrase** follows the same process but results in a **132-bit private key** instead.

## A Formatting Issue in the BIP39 Word List

The official [BIP39 word list](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt) is stored on GitHub, where words are numbered **from 1 to 2048 instead of 0 to 2047**. This is just a formatting issue, but it can be confusing.

For example, if the private key starts with `00000000000` (binary zero), the corresponding word should be the first word on the list, which is **"abandon."** However, on GitHub, "abandon" is labeled as word **1** instead of **0**. This means every word in the list appears **one position higher than the number it actually represents**, requiring a simple correction when looking up words.


![](/img/basics/words.png)


## Step-by-Step Conversion Example

Consider this binary private key (with the last 8 digits generated as a checksum):

```
101110001011101110010010111100111011010001011111101010111111001000001000001011011100010110101010100101110111011111100010101111001110101110101001001100011110111000111111110111010001100010110101000110111110101001111100010000101000101101110101011001100010100101010010
```

### Step 1: Break into 11-digit chunks

```
10111000101 11011100100 10111100111 01101000101 11111010101 11111001000 00100000101 10111000101 10101010100 10111011101 11111000101 01111001110 10111010100 10011000111 10111000111 11111011101 00011000101 10101000110 11111010100 11111000100 00101000101 10111010101 10011000101 00101010010
```

### Step 2: Convert each chunk to decimal

```
1477, 1764, 1511, 837, 2005, 1992, 261, 1477, 1364, 1501, 1989, 974, 1492, 1223, 1479, 2013, 197, 1350, 2004, 1988, 325, 1493, 1221, 338
```

### Step 3: Look up words in the BIP39 list

Each decimal number corresponds to a word in the official BIP39 word list. However, since the GitHub list starts from **1 instead of 0**, we must subtract 1 from each number before looking up the word.

For example:
- **1477** corresponds to word **1478** in the GitHub list, which is **"reward"**.
- **1764** corresponds to word **1765** in the GitHub list, which is,**"symptom"**, and so on.

#### Final Word List:

```
reward symptom rude hamster wide weekend camera reward pride roof weather keep ritual ocean rib wing board potato whisper weasel chunk rival obvious clean
```

### Observing the Word Order

The words are arranged in **alphabetical order**, meaning words that start with **A** represent lower numbers, and words near the end of the list represent higher numbers. This ordering becomes more obvious once you understand how the BIP39 system works.

Using words instead of numbers makes writing down a private key much easier and reduces errors. This system is why most wallets use **seed phrases** rather than raw binary or decimal keys.