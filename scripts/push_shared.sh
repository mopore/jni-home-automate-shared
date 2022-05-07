#!/bin/bash
set -euo pipefail

# Switch to base of jni-home-automate-shared
cd ..
# Save path to automate directory
home=$(pwd)

# start_dir=$(pwd)
# Switch up to base repos directory
cd ..


# Put this Script into the scripts folder of an JNI Home Automate project to fetch shared types and
# classes.

echo "Pushing shared types and classes to repos..."

# Add addiontional Repos in the following array decleration if necessary
repos=( \
	"handle_home_events"\
	"control_jni_home_telegram_bot"\
	"monitor_jni_iphone"\
	"monitor_jni_quieter_2_service"\
	"monitor_neo_sensors"\
	"control_hue_bridge"\
	"control_aws_polly"\
	"control_home_briefing"\
)

for repo in "${repos[@]}" 
do
	echo "Updating: $repo"

	if [ -d "./$repo" ]; then
		cd "$repo"
	else
		echo "Repo '${repo}' does not exist and will be cloned."
		git clone "https://github.com/mopore/${repo}.git"
		cd "$repo"
	fi

	rm -rf "src/shared"
	cp -r "$home/src/shared" "src"

	# Switch up to base repos directory
	cd ..
done

echo "All done."

exit 0