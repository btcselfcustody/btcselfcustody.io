---
sidebar_position: 4
title: Build Roms
---

# Build Roms

Generate the roms list

```bash
./build roms list
```

Take note of your laptop model and BIOS chip (e.g., `x230_12mb` or `t430_12mb` or `t480s_vfsp_16mb`).

If your model has multiple chips, determine the size of your chip by running:

```bash
sudo dmidecode | grep ROM
```

Build your ROM (this process may take some time):

```bash
./build roms <your_laptop_model>
```

Once the ROM has been compiled, navigate to the directory:

```bash
cd lbmk/bin/<your_laptop_model>
```

You'll find a comprehensive list of BIOS options available for flashing into the BIOS chip. Ensure to select the one corresponding to the keyboard configuration of your device.
As example, select SEABIOS and copy it to a easily accessible location:

```bash
cp seabios_<your_laptop_model>_libgfxinit_corebootfb.rom /home/neo/libreboot
```