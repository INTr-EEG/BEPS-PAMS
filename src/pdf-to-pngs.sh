#!/usr/bin/bash
#
# pdf-to-pngs.sh
# 2022-09-20

readonly WD="$(cd -- "$(dirname -- "${BASH_SOURCE:-$0}")" &> /dev/null && pwd)"
readonly DEV_IMGS_DIR="${WD}/../dev-imgs"
readonly IN="${DEV_IMGS_DIR}/WCP2.2_BEPS & PAMS_120922.pdf"
readonly OUT="${DEV_IMGS_DIR}/slides_"$(date +'%Y-%m-%d')""

mkdir -p "$OUT"

pdftoppm -png "$IN" "${OUT}/slide"

for f in "$OUT"/*.png; do
    convert "$f" -resize 60% "$f"
done

pngquant \
    --force \
    --skip-if-larger \
    --ext '.png.' \
    --speed 1 \
    --strip \
    -- "$OUT"/*.png

