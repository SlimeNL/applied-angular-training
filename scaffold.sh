#!/bin/bash

# Get list of directories in src/app/areas excluding 'shared'
areas_dir="src/app/areas"
areas=()

# Read directories into array (compatible with Git Bash on Windows)
for dir in "$areas_dir"/*/ ; do
    if [ -d "$dir" ]; then
        basename=$(basename "$dir")
        if [ "$basename" != "shared" ]; then
            areas+=("$basename")
        fi
    fi
done

# Sort the areas array
IFS=$'\n' areas=($(sort <<<"${areas[*]}"))
unset IFS

# Check if any areas were found
if [ ${#areas[@]} -eq 0 ]; then
    echo "No areas found in $areas_dir (excluding 'shared')"
    exit 1
fi

# Display menu of areas (compatible replacement for select)
echo "Select an area:"
for i in "${!areas[@]}"; do
    echo "$((i+1))) ${areas[$i]}"
done

# Get user selection
while true; do
    read -p "Enter selection (1-${#areas[@]}): " selection
    if [[ "$selection" =~ ^[0-9]+$ ]] && [ "$selection" -ge 1 ] && [ "$selection" -le "${#areas[@]}" ]; then
        area="${areas[$((selection-1))]}"
        echo "Selected area: $area"
        break
    else
        echo "Invalid selection. Please try again."
    fi
done

# Ask for feature name
read -p "Enter the name of the feature: " feature_name

# Validate feature name is not empty
if [ -z "$feature_name" ]; then
    echo "Feature name cannot be empty"
    exit 1
fi

# Set up paths
template_dir=".templates/landing-feature"
output_dir="src/app/areas/$area"
feature_dir="$output_dir/${feature_name}-landing"

# Check if feature directory already exists
if [ -d "$feature_dir" ]; then
    echo "Error: Feature directory $feature_dir already exists"
    exit 1
fi

echo "Creating feature: $feature_name in $output_dir"

# Create directory structure
mkdir -p "$feature_dir/internal/pages"

# Process and copy files
echo "Copying template files..."

# Copy routes file
routes_file="$feature_dir/${feature_name}.routes.ts"
sed -e "s/{{name}}/$feature_name/g" -e "s/{{ name }}/$feature_name/g" "$template_dir/{{name}}-landing/{{name}}.routes.ts" > "$routes_file"
echo "Created: $routes_file"

# Copy home.ts (internal)
home_file="$feature_dir/internal/home.ts"
sed -e "s/{{name}}/$feature_name/g" -e "s/{{ name }}/$feature_name/g" "$template_dir/{{name}}-landing/internal/home.ts" > "$home_file"
echo "Created: $home_file"

# Copy pages/home.ts
page_file="$feature_dir/internal/pages/home.ts"
sed -e "s/{{name}}/$feature_name/g" -e "s/{{ name }}/$feature_name/g" "$template_dir/{{name}}-landing/internal/pages/home.ts" > "$page_file"
echo "Created: $page_file"

echo ""
echo "Feature '$feature_name' scaffolded successfully in $feature_dir"
